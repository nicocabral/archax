import { Fragment, useEffect} from 'react';
import useToggleNodeTree from '../../../hooks/useToggleNodeTree';
import ListItem from '../ListItem/ListItem';
import './List.scss';
type ListType = {
    node: Array<any>,
    data?: Array<any>,
    name?: any
}

export default function List({node, name, data}: ListType) {
  const [toggle, setToggle, setToggleApplications] = useToggleNodeTree((state: any) => [state.toggle, state.setToggle, state.setToggleApplications]);
  const handleToggle = (name: any) => setToggle(name, !toggle?.[name]);
  useEffect(() => {
    if (toggle?.[name]) {
      setToggleApplications(data?.filter(item => [item?.BCAP1, item?.BCAP2, item?.BCAP3].includes(name)));
    }
  }, [toggle?.[name]])
  return (
    <ul className={`cmp-navigation__list ${toggle?.[name] ? 'toggle' : name ? 'hide' : ''}`}>
      {
        (node || [])?.map(({name, children }, index) => {
          return (
            <Fragment key={index}>
              <ListItem name={name} toggle={() => handleToggle(name)}/>
              {!!children?.length && <List node={children.sort((a: any, b: any) => a.name.localeCompare(b.name))} name={name} data={data}/>}
            </Fragment>
          )
        })
      }
    </ul>
  )
}
