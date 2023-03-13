import { useEffect, useState } from 'react';
import useNodeTree from './useNodeTree';
const useData = () => {
    const { buildTree, node } = useNodeTree();
    const [data, setData] = useState([]); 
    const initData = async () => {
        const result = await fetch('http://localhost:5000/data', {
            method: 'GET'
        });
        const data = await result.json();
        buildTree(data);
        setData(data);
       
    }
   
    useEffect(() => {
        initData();
    }, []);

    return {
        node,
        data
    }
}

export default useData;