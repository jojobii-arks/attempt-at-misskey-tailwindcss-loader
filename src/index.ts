import plugin from 'tailwindcss/plugin'
import { PluginCreator } from 'tailwindcss/types/config'

const functionHandler: PluginCreator = () => {

}
const myPlugin = plugin(functionHandler, {})

export default myPlugin