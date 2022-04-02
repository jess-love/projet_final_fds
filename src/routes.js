import {Login} from './user_auth/Login';
import {Signup} from './user_auth/Signup';
import {Contents} from './components/ComponentSideMenu/Contents';
import { Games} from './components/ComponentSideMenu/Games';



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
        name:"contents",
        path:"/contents",
        component:Contents,
        menu:false
      },
      {
        name:"games",
        path:"/games",
        component:Games,
        menu:false
      },
  
  ]
