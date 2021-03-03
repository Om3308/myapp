import React from 'react';

const FirstContext= React.createContext('tqpp')

const FirstProvider=FirstContext.Provider
const FirstConsumer= FirstContext.Consumer

export {FirstProvider,FirstConsumer}
// export default FirstContext