
export function useLayout(pathname: string){
    const routes = [{
        path:'/',
        name:'Home'
    },{
        path:'/category',
        name:'Category'
    },{
        path:'/address',
        name:'Address'
    },
    {
        path:'/product',
        name:'Product'
    },
    {
        path:'/notification',
        name:'Notification'
    },
    {
        path:'/order',
        name:'Order'
    }   
    ];

    const title = pathname === "/"
        ? "Welcome"
        : pathname === "/category"
        ? "Categories"
        : pathname === "/address"
        ? "Address"
         : pathname === "/product"
        ? "Available Products"
        : pathname === "/notification"
        ? "Notifications"
        : "Order";
        return{
           title, routes
        }
}