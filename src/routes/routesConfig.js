import Favorites from "../containers/Favorites/Favorites"
import MainKotiki from "../containers/MainKotiki/MainKotiki"

const routesConfig = [
	{
		path:'',
		element:<MainKotiki></MainKotiki>
	},
	{
		path:'/favorites',
		element:<Favorites></Favorites>
	}
]
export default routesConfig