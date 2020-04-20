class ParksController < ApplicationController
    def index
        parks = Park.all
        render json: parks, include: [:comments], except: [:created_at, :updated_at]
    end

    def show
        park = Park.find(params[:id])
        render json: park, include: [:comments], except: [:created_at, :updated_at]
    end

    def new
        park = Park.new
    end

    def create
        park = Park.new(park_params)
        if park.save
            render json: park, include: [:comments], except: [:created_at, :updated_at]
        end
    end

    def update
        park = Park.find(params[:id])
        if park.update(park_params)
            render json: park, include: [:comments], except: [:created_at, :updated_at]
        end
    end

    def destroy 
        park = Park.find(params[:id])
        park.destroy
    end

    private
    def park_params
        params.require(:park).permit(:name, :description, :activities, :directions, :images, :likes)
    end

end
