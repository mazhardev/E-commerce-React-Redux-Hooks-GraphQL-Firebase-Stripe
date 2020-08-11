import React from 'react';
import { Route } from 'react-router-dom'


import CollectionOverview from '../../components/collection-overview/collection-overview.component'
import Collection from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route exact path={`${match.path}/:categoryId`} component={Collection} />
  </div>
)

export default ShopPage;
