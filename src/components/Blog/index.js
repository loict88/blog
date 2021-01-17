import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'src/components/Header';
import Title from 'src/components/Title';
import Articles from 'src/components/Articles';
import Footer from 'src/components/Footer';
import categories from 'src/data/categories';
import NotFound from 'src/components/NotFound';
import postsData from 'src/data/posts';
import './style.scss';

const Blog = () => {
  const [zen, setZen] = useState(false);
  const activeZen = () => {
    setZen(!zen);
  };

  return (
    <div className="blog">
      <Header categories={categories} activeZen={activeZen} ZenMode={zen} />
      <Title />
      <Switch>
        {categories.map((currentCat) => {
          let filteredPosts;
          if (currentCat.route === '/') {
            filteredPosts = postsData;
          }
          else {
          // eslint-disable-next-line max-len
            filteredPosts = postsData.filter((currentPost) => currentPost.category === currentCat.label);
          }
          return (
            <Route key={currentCat.route} exact path={currentCat.route}>
              <Articles postsData={filteredPosts} ZenMode={zen} />
            </Route>
          );
        })}
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};
export default Blog;
