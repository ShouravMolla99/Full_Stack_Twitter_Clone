import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import NotificationIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PendingIcon from "@mui/icons-material/Pending";


export const navigationMenu = [
    {
        title: "Home",
        icon: <HomeIcon></HomeIcon>,
        path: "/home"
    },
    {
        title: "Explore",
        icon: <ExploreIcon></ExploreIcon>,
        path: "/explore"
    },
    {
        title: "Notifications",
        icon: <NotificationIcon></NotificationIcon>,
        path: "/notifications"
    },
    {
        title: "Messages",
        icon: <MessageIcon></MessageIcon>,
        path: "/messages"
    }, {
        title: "Lists",
        icon: <ListAltIcon></ListAltIcon>,
        path: "/lists"
    },
    {
        title: "Communities",
        icon: <GroupIcon></GroupIcon>,
        path: "/communities"
    },

    {
        title: "Verified",
        icon: <VerifiedIcon></VerifiedIcon>,
        path: "/verified"
    },
    {
        title: "Profile",
        icon: <AccountCircleIcon></AccountCircleIcon>,
        path: "/profile"
    },
    {
        title: "More",
        icon: <PendingIcon></PendingIcon>,
        path: "/more"
    },


]