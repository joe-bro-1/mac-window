import Image from 'next/image';

function MacWindow({ fullscreen, title, children }) {
	if (fullscreen == true) {
		var fullscreen_icon = '/macwindow_files/svg/exit-fullscreen.svg';
		var minimize_image_style = 'h-3 w-3 opacity-0';
		var minimize_style =
			'mac-window-header-icon bg-slate-300 rounded-full w-3 h-3 ml-2';
	} else {
		var fullscreen_icon = '/macwindow_files/svg/enter-fullscreen.svg';
		var minimize_image_style = 'h-3 w-3 opacity-0 group-hover:opacity-100';
		var minimize_style =
			'mac-window-header-icon bg-yellow-500 rounded-full w-3 h-3 ml-2';
	}

	return (
		<div className='mac-window bg-slate-100 rounded-xl'>
			<div className='mac-window-header p-2 group bg-slate-50 rounded-t-xl'>
				{/* this line break matches mac os styles of apps with tools in the toolbar it can be removed if you don't use a toolbar */}
				{/* <br /> */}
				<div className=''>
					<div className='flex'>
						<div className='mac-window-header-icon bg-red-500 rounded-full w-3 h-3 ml-2'>
							<Image
								src='/macwindow_files/svg/x.svg'
								width={10}
								height={10}
								className='h-3 w-3 opacity-0 group-hover:opacity-100'
								alt='close'
							/>
						</div>
						<div className={minimize_style}>
							<Image
								src='/macwindow_files/svg/minimize.svg'
								width={10}
								height={10}
								className={minimize_image_style}
								alt='minimize'
							/>
						</div>

						<div className='mac-window-header-icon bg-green-500 rounded-full w-3 h-3 ml-2'>
							<Image
								src={fullscreen_icon}
								width={10}
								height={10}
								className='h-3 w-3 opacity-0 group-hover:opacity-100'
								alt='enter-fullscreen'
							/>
						</div>
					</div>
					<p className='text-gray-600 text-center p-0 -mt-5'>
						{title}
					</p>
				</div>
			</div>
			<br />
			<div className='mac-window-body text-black p-2'>{children}</div>
			<br />
		</div>
	);
}

export default MacWindow;
