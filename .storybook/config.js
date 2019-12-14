import { configure } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';

// automatically import all files ending in *.story.jsx
configure(require.context('../src', true, /\/(.*\.)?story\.jsx$/), module);
