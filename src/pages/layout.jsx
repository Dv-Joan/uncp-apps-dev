import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { Button } from '@mantine/core'
function Layout() {
    return (
        <div className='text-white font-bold text-2xl mb-7'>
            <nav>
                <ul className='flex gap-3 mb-7 border-[1px] border-dotted border-lime-500 rounded-md'>
                    <li>
                        <Link to="/">
                            <Button>

                                Home
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/blogs"><Button>

                            Blogs
                        </Button></Link>
                    </li>
                    <li>
                        <Link to="/contact"><Button>

                            Contact
                        </Button></Link>
                    </li>
                    <li>
                        <Link to="/products"><Button>

                            Products
                        </Button></Link>
                    </li>
                    <li>
                        <Link to="/about">
                            <Button>

                                About
                            </Button>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div >
    )
}

export default Layout