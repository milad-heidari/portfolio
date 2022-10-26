import React from 'react'

function NavigationDots({active}) {
  return (
    <div className='app__navigation'>
      {["home", "about", "work", "skills", "testimonial"].map((item,index) => (
                  <a
                    key={item + index}
                    className='app__navigation-dot' 
                    href={`#${item}`} 
                    style={active === item ? {backgroundColor:'#313bac'}: {}}/>

                
            ))}
    </div>
  )
}

export default NavigationDots