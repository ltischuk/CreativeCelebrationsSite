/**
 * Created by ltischuk on 3/11/17.
 */
(function() {
  'use strict';
  
  angular
    .module('ccsite')
    .factory('GalleryImgService', GalleryImgService);
  
  /** @ngInject */
  function GalleryImgService() {
    
    var imageObjects =[
  
      {
        src: 'gallery_custom_centerpiece.jpg',
        description:'Custom Centerpieces for your Theme',
        category: 'Weddings',
        useAsCategory : true
      },
  
      {
        src: 'gallery_themed_elements1.jpg',
        description:'Custom Display Elements',
        category: 'Weddings'
      },
      {
        src: 'gallery_themed_elements2.jpg',
        description:'Vintage Small Custom Display',
        category: 'Weddings'
      },
      {
        src: 'gallery_custom_name.jpg',
        description:'Unique Display Ideas',
        category: 'Weddings'
      },
      {
        src: 'corpevents.jpg',
        description:'Corporate Events',
        category: 'Events'
      },
      {
        src: 'tablescape3.jpg',
        description:'Custom Signage & Design',
        category: 'Weddings'
      },
  
      {
        src: 'thompson1.jpg',
        description:'Wedding Tablescape',
        category: 'Weddings'
      },
      {
        src: 'tablescape2.jpg',
        description:'Custom Tablescape',
        category: 'Weddings'
      },
  
      {
        src: 'steampunk.jpg',
        description:'Themed Events',
        category: 'Weddings'
      },
      {
        src: 'florals.jpg',
        description:'Floral Arrangements',
        category: 'Weddings'
      },
      {
        src: 'gallery_themed_elements3.jpg',
        description:'Rustic Custom Display',
        category: 'Weddings'
      },
      {
        src: 'gallery_themed_plate.jpg',
        description:'Custom Accents',
        category: 'Weddings'
      },
      {
        src: 'newyearsweddingtable.jpg',
        description:'Luminescent Tablescapes',
        category: 'Weddings'
      },
      {
        src: 'newyearsweddingtableclose.jpg',
        description:'Gorgeous Table Arrangements',
        category: 'Weddings'
      },
      {
        src: 'newyearsweddingtableside.jpg',
        description:'Table Florals',
        category: 'Weddings'
      },
      {
        src: 'newyearsweddingcorsage.jpg',
        description:'Bridal Bouquet Arrangements',
        category: 'Weddings'
      },
      {
        src: 'retromodern1.jpg',
        description: '2017 Audubon Park Retro Modern Home Tour Custom Table Design',
        category: 'Events'
      },
      {
        src: 'retromodern2.jpg',
        description: '2017 Audubon Park Retro Modern Home Tour Custom Theme Display',
        category: 'Events',
        useAsCategory : true
      },
      {
        src: 'retromodern3.jpg',
        description: '2017 Audubon Park Retro Modern Home Tour - Courtesy of TipsoPhoto',
        category: 'Events'
      },
      {
        src: 'retromodern4.jpg',
        description: '2017 Audubon Park Retro Modern Home Tour - Courtesy of TipsoPhoto',
        category: 'Events'
      },
      {
        src: 'retromodern5.jpg',
        description: '2017 Audubon Park Retro Modern Home Tour - Courtesy of TipsoPhoto',
        category: 'Events'
      }

    ]
    
    var service = {
      getCategoryObjects: getCategoryObjects,
      filterImagesForCategory : filterImagesForCategory
    };
    
    return service;
  
    /**
     * Obtain the category objects to display as categories
     * @returns {Array.<*>}
     */
    function getCategoryObjects() {
      
      return imageObjects.filter(function(item){return angular.isDefined(item.useAsCategory) && item.useAsCategory});
      
    }
  
    /**
     * Filter the images for a certain category
     * @param category
     * @returns {Array.<*>}
     */
    function filterImagesForCategory(category){
      
      return imageObjects.filter(function(item){return item.category === category});
      
    }
  }
})();
