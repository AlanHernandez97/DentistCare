'use client'
import React from 'react'
import MobileNavBar from './Mobile/MobileNavBar'
import { useWindowSize } from 'usehooks-ts'
import NavBarDesktop from '@/src/components/Organisms/navbar/Desktop/NavBarDesktop';

export default function Navbar() {

	const { width } = useWindowSize()

	return (
		<div>
			{
				(width > 500) ? <NavBarDesktop /> : <MobileNavBar />
			}
		</div>
	)
}
