# == Route Map
#
#            Prefix Verb   URI Pattern                Controller#Action
#              root GET    /                          static_pages#root
# api_pokemon_index GET    /api/pokemon(.:format)     api/pokemon#index {:format=>:json}
#                   POST   /api/pokemon(.:format)     api/pokemon#create {:format=>:json}
#       api_pokemon GET    /api/pokemon/:id(.:format) api/pokemon#show {:format=>:json}
#                   PATCH  /api/pokemon/:id(.:format) api/pokemon#update {:format=>:json}
#                   PUT    /api/pokemon/:id(.:format) api/pokemon#update {:format=>:json}
#                   DELETE /api/pokemon/:id(.:format) api/pokemon#destroy {:format=>:json}
#           api_toy GET    /api/toys/:id(.:format)    api/toys#show {:format=>:json}
#                   PATCH  /api/toys/:id(.:format)    api/toys#update {:format=>:json}
#                   PUT    /api/toys/:id(.:format)    api/toys#update {:format=>:json}
#

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :pokemon, only: [:create, :destroy, :index, :show, :update]
    resources :toys, only: [:show, :update]
  end
end
