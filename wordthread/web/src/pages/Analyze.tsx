import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import TabBar from '../components/layout/TabBar';
import { startAnalysis } from '../lib/api';

const Analyze = () => {
  const [text, setText] = useState('');
  const [runId, setRunId] = useState<string | null>(null);

  const mutation = useMutation({
    mutationFn: startAnalysis,
    onSuccess: (data) => {
      setRunId(data.run_id);
    },
  });

  return (
    <div className="flex flex-col w-full h-screen bg-background text-text">
      <div className="flex flex-grow">
        {/* Left Sidebar */}
        <div className="w-1/4 p-4 border-r border-gray-700">
          <h2 className="mb-4 text-lg font-bold">Text Input / Upload</h2>
          <textarea
            className="w-full h-64 p-2 rounded bg-panel text-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button
            className="w-full py-2 mt-4 font-bold rounded bg-accent text-background"
            onClick={() => mutation.mutate({ text })}
          >
            {mutation.isPending ? 'Running...' : 'Run'}
          </button>
          {runId && <p className="mt-2 text-sm">Run ID: {runId}</p>}
        </div>

        {/* Main Content */}
        <div className="flex flex-col flex-grow">
          <TabBar />
          <div className="flex-grow p-8">
            {/* Content area for tabs */}
            <p>Content for the selected tab will be displayed here.</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 p-4 border-l border-gray-700">
          <h2 className="mb-4 text-lg font-bold">Analysis Mode</h2>
          <div className="mb-4">
            <button className="w-full py-2 mb-2 rounded bg-panel">Einzel</button>
            <button className="w-full py-2 rounded bg-panel">Chat</button>
          </div>
          <h2 className="mb-4 text-lg font-bold">Semantische Verortung</h2>
          {/* Placeholder for semantic location */}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-700">
        <h3 className="font-bold">Marker-Legende:</h3>
        <div className="flex space-x-4">
          <span>ATO</span>
          <span>SEM</span>
          <span>CLU</span>
          <span>MEMA</span>
        </div>
      </div>
    </div>
  );
};

export default Analyze;
