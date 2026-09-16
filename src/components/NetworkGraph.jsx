// src/components/NetworkGraph.jsx
import React, { useEffect, useRef } from 'react';

/**
 * NetworkGraph renders an SVG based graph with a central node and peripheral nodes.
 * Lines use CSS animation so the graph stays dependency-free.
 */
export default function NetworkGraph({
  centerLabel = 'MY DISCOVERY',
  nodes = [], // [{id, label, ideas: []}]
  onNodeClick,
}) {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const lines = svg.querySelectorAll('.connection-line');
    lines.forEach((line) => {
      line.style.animation = 'none';
      void line.getBoundingClientRect();
      line.style.animation = '';
    });
  }, [nodes]);

  // Position calculations – simple radial layout
  const radius = 180; // distance from centre to peripheral nodes
  const centerX = 250;
  const centerY = 250;
  const angleStep = (2 * Math.PI) / nodes.length;

  return (
    <div className="network-graph" style={{ position: 'relative', width: '500px', height: '500px', margin: '0 auto' }}>
      <svg ref={svgRef} width="500" height="500" style={{ position: 'absolute', top: 0, left: 0 }}>
        {/* Central node (no line needed) */}
        {nodes.map((node, i) => {
          const angle = i * angleStep - Math.PI / 2; // start at top
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          return (
            <React.Fragment key={node.id}>
              {/* Connection line */}
              <line
                className="connection-line"
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="var(--color-primary-cyan)"
                strokeWidth="2"
              />
              {/* Peripheral node */}
              <circle
                cx={x}
                cy={y}
                r="30"
                fill="var(--color-primary-magenta)"
                className="network-node"
                onClick={() => onNodeClick(node)}
                style={{ cursor: 'pointer' }}
              />
              <text x={x} y={y + 5} textAnchor="middle" fill="var(--color-text)" fontFamily="var(--font-heading)" fontSize="12">
                {node.label}
              </text>
            </React.Fragment>
          );
        })}
        {/* Central node */}
        <circle cx={centerX} cy={centerY} r="40" fill="var(--color-primary-cyan)" />
        <text x={centerX} y={centerY + 5} textAnchor="middle" fill="#000" fontFamily="var(--font-heading)" fontSize="14" fontWeight="600">
          {centerLabel}
        </text>
      </svg>
    </div>
  );
}
