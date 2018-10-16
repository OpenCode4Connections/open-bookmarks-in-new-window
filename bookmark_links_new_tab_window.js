var features = {
    BOOKMARK_LINKS_OPEN_IN_NEW_TAB_OR_WINDOW                     : true
};

var config = {
    default_language    : 'en_US',
    supported_languages : ['en_US', 'fr_FR', 'de'],
    current_language    : '',
    plugins             : {WIKIS_SIDEBAR_LINKS_ENABLE_SCROLLBAR : { WIKIS_SIDEBAR_LINKS_NAV_HEIGHT : '100px'}},
    is_cloud            : (typeof gllConnectionsData == "object" || typeof icUser == "object"),
    homepage_url        : "/homepage"
};


var strings={en_US:{ERASE:"Erase",DELETE:"Delete",CANCEL:"Cancel",DOWNLOAD_CSV:"Download CSV",ADD_TO_FAVOURITES:"Add to Favourites",FAVOURITED:"A Favourite Community",BULK_DELETE_MEMBERS:"Bulk delete members",NO_MEMBERS_SELECTED:"You have not selected any members to be deleted",CONFIRM_MEMBER_DELETE_1:"Are you sure you want to delete",CONFIRM_MEMBER_DELETE_2_1:" member",CONFIRM_MEMBER_DELETE_2_2:" members",CONFIRM_MEMBER_DELETE_3:"? There is no way to undo this action.",SELECT_ALL:"Select all",FAVOURITE_COMMUNITIES:"Favourite Communities",
MY_FAVOURITE_COMMUNITIES:"My favourite Communities",NO_COMMUNITIES_ADDED:"You have not added any communities to your favourites.",NUMBER_OF_PEOPLE_TO_BE_DELETED:"Number of people to be deleted:"},fr_FR:{ERASE:"Effacer",DELETE:"Supprimer",CANCEL:"Annuler",DOWNLOAD_CSV:"T\u00e9l\u00e9charger le CSV",ADD_TO_FAVOURITES:"Ajouter \u00e0 mes favoris",FAVOURITED:"Une communaut\u00e9 pr\u00e9f\u00e9r\u00e9e",BULK_DELETE_MEMBERS:"Supprimer des membres",NO_MEMBERS_SELECTED:"Vous n'avez pas selectionn\u00e9 de membre \u00e0 supprimer",
CONFIRM_MEMBER_DELETE_1:"\u00cates-vous s\u00fbr de vouloir supprimer",CONFIRM_MEMBER_DELETE_2_1:" membre",CONFIRM_MEMBER_DELETE_2_2:" membres",CONFIRM_MEMBER_DELETE_3:"? Il n'est pas possible d'annuler cette action.",SELECT_ALL:"Tout s\u00e9lectionner",FAVOURITE_COMMUNITIES:"Communaut\u00e9s Favorites",MY_FAVOURITE_COMMUNITIES:"Mes communaut\u00e9s pr\u00e9f\u00e9r\u00e9es",NO_COMMUNITIES_ADDED:"Vous n'avez pas de communaut\u00e9s favorites",NUMBER_OF_PEOPLE_TO_BE_DELETED:"Le nombre de personnes \u00e0 supprimer"},
de:{ADD_TO_FAVOURITES:"Zu Favoriten hinzuf\u00fcgen"}};function set_language(){var a=atob(dojo.cookie("user_lang").substring(0,dojo.cookie("user_lang").indexOf("=")));-1<config.supported_languages.indexOf(a)?config.current_language=a:config.current_language=config.default_language}function get_translation(a){return strings[config.current_language][a]}set_language();

features.BOOKMARK_LINKS_OPEN_IN_NEW_TAB_OR_WINDOW&&document.addEventListener("DOMContentLoaded",function(){if(window.location.pathname.startsWith("/communities/service/html/community/bookmarks"))var c=setInterval(function(){if(null!==document.getElementById("bookmarkContentAreaSub")){for(var b=document.querySelectorAll("#bookmarkContentAreaSub table tbody tr td h4 a"),a=0;b.length>a;a++)b[a].setAttribute("target","_blank");clearInterval(c)}},1E3);window.location.pathname.startsWith("/communities/service/")&&
(c=setInterval(function(){if(null!==document.getElementById("importantBookmarks")){for(var b=document.querySelectorAll("#importantBookmarks ul li a.action"),a=0;b.length>a;a++)b[a].setAttribute("target","_blank");clearInterval(c)}},1E3))},!1);