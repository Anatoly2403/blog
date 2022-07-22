import React, { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AuthPage, MainPage, UserPage } from "./pages";

const App: FC = () => (
  <Layout>
    <Routes>
      <Route path='/' element={<MainPage />} />      
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/user/:id' element={<UserPage />} />
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  </Layout>
);
export default App;
