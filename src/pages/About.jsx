import React from 'react';
import author from '../images/author.jpg'
import fb from '../images/fb.png'
import git from '../images/git.png'

const About = () => {
    return (
        <div className="">
            <div className='flex flex-col items-center pt-14'>

<img className='rounded-full border-4 p-2 max-w-[300px]' src={author} alt="" />
<p className='font-serif text-xl pt-6 text-center'>Hi, I am Shazzad Hossen. I am a fullstack web developer. <br /> I am good at HTML5,CSS3,JavaScript,  Tailwind Css, Node.js, React.js, Next.js, MongoDB,Firebase. <br />
I can build excelent websites for you. <br />I am free for full time or part time job. You can hire me at any time. I am looking for a challenging position as a React Developer in a dynamic and innovative organization where I can utilize my skills and knowledge to develop high-quality web applications. </p>
<br /> <br /> <br />
        </div>
        
           <div className="font-semibold flex justify-center">
           <a className='text-[#1547ec]' href='https://www.facebook.com/sboy.showrav'> <img className='w-[50px]' src={fb} alt="" /> </a>
           &nbsp;
           &nbsp;
           &nbsp;
           <a className='text-[#1547ec]' href='https://github.com/Shazzad-Hossen'><img  className='w-[50px]' src={git} alt="" /></a>
           </div>

           <br /> <br /> <br /> <br />

           
            
        </div>
    );
};

export default About;