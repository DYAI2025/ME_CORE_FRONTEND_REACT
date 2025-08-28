import { NavLink } from 'react-router-dom';

const tabs = [
  { name: 'Timeline', to: '/analyze/timeline' },
  { name: 'Co-Occurrence', to: '/analyze/cooccurrence' },
  { name: 'Heatmap', to: '/analyze/heatmap' },
  { name: 'Insights', to: '/analyze/insights' },
];

const TabBar = () => {
  return (
    <div className="flex p-4 space-x-8 border-b border-gray-700">
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.to}
          className={({ isActive }) =>
            `pb-2 font-medium transition-colors hover:text-accent ${
              isActive ? 'text-accent border-b-2 border-accent' : 'text-text'
            }`
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </div>
  );
};

export default TabBar;
