
import MainNavigation from './MainNavigation'
import "../../styles/globals.css"


export default function Layoute({children}) {
  return (
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
    </head>
    <body>
        <MainNavigation />
        {children}
    </body>
    </html>
  )
}
