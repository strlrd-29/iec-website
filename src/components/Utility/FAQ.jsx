import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'

import { BsCaretRightFill } from 'react-icons/bs'

function FAQ() {
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'History Lorem ipsum dolor sit amet consectetur adipisicing ?',
      content:
        'History Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis neque reiciendis molestiae ullam voluptatum, velit, accusantium nemo perferendis ab minima maiores quos et doloribus necessitatibus! Sapiente esse obcaecati aliquid ab',
    },
    {
      id: 2,
      title: 'History Lorem ipsum dolor sit amet consectetur adipisicing ?',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis neque reiciendis molestiae ullam voluptatum, velit, accusantium nemo perferendis ab minima maiores quos et doloribus necessitatibus! Sapiente esse obcaecati aliquid ab',
    },
    {
      id: 3,
      title: 'History Lorem ipsum dolor sit amet consectetur adipisicing ?',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis neque reiciendis molestiae ullam voluptatum, velit, accusantium nemo perferendis ab minima maiores quos et doloribus necessitatibus! Sapiente esse obcaecati aliquid ab',
    },
  ])

  function Collapse ({isOpen, content}) {
 
      const childHeightRaw = content.clientHeight;
      const childHeight = `${childHeightRaw / 16}rem`;

    return(
    
        <div className="collapse" style={{
            maxHeight: isOpen ? childHeight : 0,
            transition : "0.4s max-height" ,
            overflow :"hidden"
          }}>
            <div ><Content content={content} /></div>
            
          
        </div>
      
    )
  }

  function Item({ content, title, index, funct, trigger }) {
    return (
      <li
        className='w-[100%]'
        style={{ animationDelay: '0.1s', animationDuration: '1.5s' }}
        layout
        onClick={funct}
        initial={{ borderRadius: 10 }}>
        <div
          layout
          className='flex py-5 px-6 items-center justify-between font-bold bg-white rounded-lg  text-iec-blue-2-500'>
          {title}
          <div className='w-5 h-5 text-white flex justify-center items-center rounded-full bg-iec-orange-2-500'>+</div>
        </div>
        <Collapse isOpen={trigger[index].status} content={content}>
        <section className="sample-content">
            <h1>content</h1>
            <p>content</p>
          </section>
        </Collapse>
      </li>
    )
  }

  function Content({ content }) {
    return (
      <div
        className='w-full px-6 text-center py-3'
       >
        {content}
      </div>
    )
  }

  const [trigger, setTrigger] = useState([
    { status: false },
    { status: false },
    { status: false },
  ])
  const clickHandler = i => {
    let tab = [...trigger]
    tab[i].status = !tab[i].status
    for (const [index, name] of tab.entries()) {
      if (index != i) {
        tab[index].status = false
      }
    }
    setTrigger(tab)
    console.log(trigger)
  }

  return (
    <>
     
        <ul
          className='flex w-3/5  justify-center my-12 flex-col  gap-3'
          layout
          initial={{ borderRadius: 25 }}>
          {items.map((item, i) => (
            <Item
              key={i}
              index={i}
              title={item.title}
              content={item.content}
              funct={() => clickHandler(i)}
              trigger={trigger}
            />
          ))}
        </ul>
    </>
  )
}

export default FAQ