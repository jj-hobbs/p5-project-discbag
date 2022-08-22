class DiscsController < ApplicationController

    def index
        render json: Disc.all
    end

    def show
        disc = find_disc
        render json: disc
    end

    def create
        disc = Disc.create!(disc_params)
        render json: disc, status: :created
    end

    def update
        disc = find_disc
        disc.update!(disc_params)
        render json: disc, status: :ok
    end

    def destroy
        disc = find_disc
        disc.comments.destroy_all
        disc.destroy
        head :no_content, status: :ok
    end

    private

    def find_disc
        Disc.find(params[:id])
    end

    def disc_params
        params.permit(:brand, :mold, :speed, :glide, :turn, :fade, :user_id)
    end

end
