import "../../styles/globals.css"

export const metadata = {
    title : 'Next.js' ,
    description : 'generate by Nrxt.js',
}

export default function RootLayout({children}){
    return(
        <html lang="en">
            <head>
                <title>Dashbord</title>
            </head>
            <body className="bg-gray-400">{children}</body>
        </html>
    )
}