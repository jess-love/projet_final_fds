import {Login} from './user_auth/Login';
import {Signup} from './user_auth/Signup';
import Navigation_bar from './components/Navigation_bar';



export const route=[

    {
      name:"login",
      path:"/login",
      component: Login,
      menu:false
    },
    {
        name:"signup",
        path:"/signup",
        component:Signup,
        menu:false
      },
      {
        name:"navigation_bar",
        path:"/nav_bar",
        component:Navigation_bar,
        menu:false
      },
  
  ]
