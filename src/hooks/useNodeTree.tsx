import { useState } from 'react';
type NodeObj = {
    name?: string,
    id?: string,
    spend?: number,
    node?: string
}
class NodeTree {
    node?: string;
    name?: string;
    children: Array<any>;
    id?: string;
    spend?: number
    constructor(props?: NodeObj) {
        this.node = props?.name;
        this.children = [];
        this.name = props?.node;
        this.id = props?.id;
        this.spend = props?.spend;
    }
}
const useNodeTree = () => {
    const [node, setNode] = useState(Array<any>);
    const buildTree = (data: any) => {
        const root = new NodeTree();
        data.forEach(({ BCAP1, BCAP2, BCAP3, ...rest }: any) => {   
            let node1 = root.children.find((child: any) => child.name === BCAP1);
            if (!node1) {
                node1 = new NodeTree({node: BCAP1, ...rest});
                root.children.push(node1);
            }

            let node2 = node1.children.find((child: NodeObj) => child.name === BCAP2);
            if (!node2) {
                node2 = new NodeTree({node: BCAP2, ...rest});
                node1.children.push(node2);
            }

            let node3 = node2.children.find((child: NodeObj) => child.name === BCAP3);
            if (!node3) {
                node3 = new NodeTree({node: BCAP3, ...rest});
                node2.children.push(node3);
            }
        });
        setNode(root?.children.sort((a, b) => a.name.localeCompare(b.name)));
    }
    return {
        buildTree,
        node
    }
}

export default useNodeTree;