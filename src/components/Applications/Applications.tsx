import { useMemo} from 'react';
import useToggleNodeTree from '../../hooks/useToggleNodeTree';
import './Applications.scss';
export default function Applications(props: any) {
  const [toggleApplications, filterValue] = useToggleNodeTree((state: any) => [state.toggleApplications, state.filterValue]);
  const data = useMemo(() => {
    if (filterValue) {
      return toggleApplications?.filter((item: any) => item?.spend > filterValue && filterValue < item?.spend);
    }
    return toggleApplications;
  }, [toggleApplications, filterValue]);
  return (
    <div className='cmp-applications'>
      {
        (data || [])?.map(({name, spend}: any) => {
          return (
            <div className='cmp-applications__box' key={name}>
              <div className='title'>{name}</div>
              <div>Total spend: ${spend}</div>
            </div>
          )
        })
      }
    </div>
  )
}
