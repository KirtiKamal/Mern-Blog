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
            <img src="https://payu.in/blog/wp-content/uploads/2018/12/Blog-Cover2aa-1.png" />
        </div>
    </div>
  )
}