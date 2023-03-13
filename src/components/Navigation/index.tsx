import List from './List/List';
import Filters from './Filters/Filters';
import './Navigation.scss';
export default function Navigation({data = [], node=[]}: any) {
  return (
    <div className='cmp-navigation'>
      <List node={node} data={data}/>
      <hr/>
      <Filters/>
    </div>
  )
}
