import "../styles/globals.css"

// export const metadata = {
//     title : 'Next.js' ,
//     description : 'generate by Nrxt.js',
// }

export default function RootLayout({children}){
    return(
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}