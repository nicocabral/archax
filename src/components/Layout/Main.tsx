import React from 'react';
import './Main.scss';
import Navigation from '../Navigation';
export default function Main(props: any) {
  const { children, node, data } = props;
  return (
    <div className='cmp-layout__main'>
      <aside className='cmp-layout__main-navigation'>
        <Navigation node={node} data={data}/>
      </aside>
      <main className='cmp-layout__main-content'>
        {children}
      </main>
    </div>
  )
}
