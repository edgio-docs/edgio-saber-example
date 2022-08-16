import '@/css/global.css'
import 'saber-highlight-css/default.css'
import 'prismjs/themes/prism-tomorrow.css'

export default ({ setHead }) => {
  setHead({
    link: [
      {
        href: 'https://fonts.googleapis.com/css?family=Roboto',
        rel: 'stylesheet',
      },
    ],
  })
}
