import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to learn more about latest used Technology?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with Blogs with Kirti
            </p>
            <Button gradientDuoTone='greenToBlue' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://decodedevs.hashnode.dev/" target='_blank' rel='noopener noreferrer'>
                    Decode Devs
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://private-user-images.githubusercontent.com/98299441/360331833-c4397e5e-fce7-4521-b4bb-07c0c9e7d2f6.jpeg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjQzMTIzNzgsIm5iZiI6MTcyNDMxMjA3OCwicGF0aCI6Ii85ODI5OTQ0MS8zNjAzMzE4MzMtYzQzOTdlNWUtZmNlNy00NTIxLWI0YmItMDdjMGM5ZTdkMmY2LmpwZWc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwODIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDgyMlQwNzM0MzhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04OWI0ZmZkYzRhOWJiMWEyNDcyOGIxYmJjNjc3NDkxOGI5NzQwMjcyOGYxNjMyYTNmN2JjZDM2NGFkZmEwYjlmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.grSUOyY6muza0We846kwZb0sM091RoTlaEZwas2SaBA" />
        </div>
    </div>
  )
}