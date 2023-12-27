import MacWindow from '@/components/macoswindow/macwindow';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <MacWindow fullscreen={false} title={'MacWindow'}>
		<h1 className='text-xl font-bold text-center'>Hello World!</h1>
		<p className='text-center'>This is the MacWindow component.</p>
	  </MacWindow>
    </main>
	);
}
