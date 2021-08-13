import React, { useEffect, Component } from 'react'
import { connect , } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { fetchHome } from '../../redux'
import { fetchFeatureProducts } from '../../redux'
import Slider from '../../components/Slider';
import { Link } from 'react-router-dom';
import CustomCard from '../../components/CustomCard';
import YoutubeCard from '../../components/YoutubeCard';
import ProductList from '../../components/ProductList';
import ProductListContainer from '../ProductListContainer/ProductListContainer';
import {
  refer_a_friend,
  point_scheme,
  become_a_vip_member,
  refer_a_friend_description,
  point_scheme_description,
  become_a_vip_member_description,
  download_our_app
} from '../../constants/common';
import certificate_banner from '../../images/certficate.png';
import { Category } from '@material-ui/icons';
import CategoryCard from '../../components/CategoryCard';
import CategoryButton from '../../components/CategoryButton';
import CategoryTab from '../../components/CategoryTab';
import FeatureList from '../FeatureList/FeatureList';



function HomePage({ home, fetchHome, featureProduct, fetchFeatureProducts }) {
  const fetched = useSelector(state => state.featureProduct.fetched);
  // console.log("home", home.homeData);
  useEffect(() => {
    fetchFeatureProducts();
    fetchHome();

  }, [])
  // useEffect(() => {
  //   fetchFeatureProducts()
  // }, [])
  const scrollItems = featureProduct.loading ? [] : featureProduct && featureProduct.featureData.featured_products;
  console.log("inside home page", scrollItems);
  // console.log("featue products", combo_and_deals);
  // const categories = home && home.homeData && home.homeData.sliders;
  // console.log(categories);

  return home.loading ? (
    <h2>Loading</h2>
  ) : home.error ? (
    <h2>{home.error}</h2>
  ) : (
    <div>
      {/* {home &&
        home.homeData && <div className="grid grid-cols-12 gap-8 pt-8">
          {home.homeData.categories.map((category) => (
            <Link key={category.id} to={{
              pathname: "/category", aboutProps: {
                id: category.id
              }
            }}>
              <div className=" col-span-2 justify center">
                <CategoryButton id={category.id} icon={category.icon_url}  name ={category.name}/>
              </div>
            </Link>
          ))}
        </div>} */}
      {home &&
        home.homeData && <div className="container mx-auto px-40">
          <CategoryTab items={home.homeData.categories} />
        </div>}
      {home &&
        home.homeData && <Slider items={home.homeData.sliders} />}
      <div className="container mx-auto lg:px-40">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-4 md:col-span-4 lg:col-span-1 ">
            <div className=" py-4 px-8 bg-white shadow-lg rounded-lg my-20 bg-green-50 rounded-lg">
              <Link to="/about">
                <CustomCard title={refer_a_friend} description={refer_a_friend_description} />
              </Link>
            </div>
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-1">
            <div className=" py-4 px-8 bg-white shadow-lg rounded-lg my-20 bg-green-50 rounded-lg">
              <Link to="/about">
                <CustomCard title={point_scheme} description={point_scheme_description} />
              </Link>
            </div>
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-1">
            <div className=" py-4 px-8 bg-white shadow-lg rounded-lg my-20 bg-green-50 rounded-lg">
              <Link to="/about" >
                <CustomCard title={become_a_vip_member} description={become_a_vip_member_description} />
              </Link>
            </div>
          </div>
          <div className="col-span-4 md:col-span-4 lg:col-span-1">
            <div className="bg-white  mx-auto shadow-lg rounded-lg hover:shadow-xl transition duration-200 max-w-sm my-20 ">
              {home &&
                home.homeData && <Link to={{
                  pathname: "/video", aboutProps: {
                    video_id: home.homeData.app_features.video
                  }
                }}>
                  <YoutubeCard video_id={home.homeData.app_features.video} description={download_our_app} />
                </Link>}
            </div>
          </div>
        </div>
        {fetched && <div className="">
          {featureProduct && featureProduct.featureData && <FeatureList items={scrollItems} />}
          {/* {featureProduct && featureProduct.featureData && <ProductListContainer items={scrollItems} />} */}
        </div>}
        {home &&
          home.homeData && <div>
            <div className="text-left uppercase text-lg text-green-800 border-b-2 border-green-700 pt-8"> Shop By Category</div>
            <div className="grid grid-cols-4 gap-8 pt-8">
              {home.homeData.categories.map((category) => (
                <Link to={{
                  pathname: "/category", aboutProps: {
                    video_id: home.homeData.app_features.video
                  }
                }}>
                  <div className=" bg-white col-span-1">
                    <CategoryCard image_url={category.image_url} name={category.name} />
                  </div>
                </Link>
              ))}
            </div>
          </div>}




        {/* <CategoryContainer items ={home.homeData.sliders} /> */}
      </div>
      <div className="bg-light-blue-300 pt-20">
        <img className="object-fill h-full w-full " src={certificate_banner} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    home: state.home,
    featureProduct: state.featureProduct
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchHome: () => dispatch(fetchHome()),
    fetchFeatureProducts: () => dispatch(fetchFeatureProducts())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)