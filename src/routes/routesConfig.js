import Favorites from "../containers/Favorites/Favorites"
import MainKotiki from "../containers/MainKotiki/MainKotiki"

const routesConfig = [
	{
		path:'/kotiki',
		element:<MainKotiki></MainKotiki>
	},
	{
		path:'/favorites',
		element:<Favorites></Favorites>
	}
]
export default routesConfig