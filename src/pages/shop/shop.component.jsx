import React from 'react';
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { selectCollections } from '../../redux/shop/shop.selector'
import CollectionPreview from '../../components/collection-preview/collection-preview';

const ShopPage = ({ collections }) =>
  <div className='shop-page'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>

const mapStateToPrps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToPrps)(ShopPage);
