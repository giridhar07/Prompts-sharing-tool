import { Suspense } from 'react';
import EditPrompt from '@components/EditPrompt';

const UpdatePrompt = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <EditPrompt />
    </Suspense>
  );
};

export default UpdatePrompt;