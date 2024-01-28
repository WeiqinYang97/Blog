import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'



const Single = () => {
    return (
        <div className='single'>
            <div className="content">
                <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <div className="user">
                    <img src="https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <div className="info">
                        <span>John</span>
                        <p>Posted two days ago</p>
                    </div>
                    <div className="edit">
                        <Link to={`/write?edit=2`}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img src={Delete} alt="" />
                    </div>
                </div>
            </div>
            <h1>Thank you for creating this software.</h1>
            <p>
                <p><b>Today's digital landscape</b> is evolving at an unprecedented pace, presenting both challenges and opportunities.</p>
                <p>One of the key aspects is the <b>integration of AI technologies</b> in everyday applications, transforming how we interact with digital platforms.</p>
                <p>The <b>importance of user experience</b> cannot be overstated. It's vital to design interfaces that are not only functional but also intuitive and engaging.</p>
                <p>Another significant trend is the <b>rise of data-driven decision making</b>. Leveraging big data allows for more informed and strategic business choices.</p>
                <p>However, this brings forth the <b>issue of data privacy</b>. It's crucial to balance innovation with ethical considerations and user privacy.</p>
                <p>In conclusion, staying abreast of these trends is essential for anyone involved in the tech industry, ensuring relevance in a rapidly changing environment.</p>


            </p>



            {/* <div className="menu">m</div> */}
            <Menu />
        </div>
    )
}

export default Single