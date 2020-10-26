import React, { useEffect, useRef } from 'react';
import { Row, Col } from 'antd';
import { Graph } from '@antv/g6';
import { NodeConfig, IG6GraphEvent, G6Event } from '@antv/g6/lib/types';

const data: {
  nodes: NodeConfig[];
} = {
  nodes: [
    {
      id: '1',
    },
  ],
};

const Canvas = () => {
  const ref = useRef<HTMLDivElement>(null);
  const graph = useRef<Graph>();

  useEffect(() => {
    if (ref.current && !graph.current) {
      graph.current = new Graph({
        container: ref.current,
        width: ref.current.getBoundingClientRect().width,
        height: ref.current.getBoundingClientRect().height,
        modes: {
          default: ['drag-canvas', 'drag-node'],
        },
        defaultNode: {
          type: 'circle',
          style: {
            stroke: '#333',
          },
        },
        defaultEdge: {
          type: 'line',
        },
      });

      graph.current.data(data);

      graph.current.render();

      graph.current.on(G6Event.CONTEXTMENU, (e: IG6GraphEvent) => {
        e.preventDefault();

        const { x, y } = e;

        graph.current?.addItem('node', {
          x,
          y,
          type: 'circle',
        });
      });
    }
  }, []);

  return <div ref={ref} className="h-full bg-white" />;
};

export default function TopologyPage() {
  return (
    <Row className="h-screen max-h-screen bg-gray-300">
      <Col
        span={4}
        className="border-r-2 border-gray-700 max-h-screen overflow-y-auto flex flex-col"
      >
        <section className="h-64 border-b-2 border-gray-700">Base nodes</section>
        <section className="h-64 border-b-2 border-gray-700">Base lines</section>
        <section className="flex-1">Custom components</section>
      </Col>
      <Col
        span={16}
        className="border-r-2 border-gray-700 max-h-screen overflow-y-auto flex flex-col"
      >
        <section className="h-10 border-b-2 border-gray-700">Toolbar</section>
        <section className="flex-1">
          <Canvas />
        </section>
        <section className="h-10 border-t-2 border-gray-700">Status bar</section>
      </Col>
      <Col span={4} className="max-h-screen overflow-y-auto flex flex-col">
        <section className="flex-1 border-b-2 border-gray-700">Actions</section>
        <section className="h-56">Minimap</section>
      </Col>
    </Row>
  );
}
