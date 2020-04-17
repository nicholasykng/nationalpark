class ParksController < ApplicationController
    def index
        parks = Park.all
        render json: parks
    end

    def show
        park = Park.find(params[:id])
        render json: park
    end

    def new
        park = Park.new
    end

    def create
        park = Park.new(park_params)
        if park.save
            render json: park
        end
    end

    def update
        park = Park.find(params[:id])
        if park.update(park_params)
            render json: park
        end
    end

    def destroy 
        park = Park.find(params[:id])
        park.destroy
    end



    private
    def park_params
        params.require(:park).permit(:name, :description, :activities, :directions, :images)
    end




end
