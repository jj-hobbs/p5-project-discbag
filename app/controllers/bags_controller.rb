class BagsController < ApplicationController

    def index
        render json: Bag.all 
    end

    def create
        bag = Bag.create!(bag_params)
        render json: bag, status: :created
    end

    def destroy
        bag = find_bag
        bag.destroy
        head :no_content, status: :ok
    end

    private

    def find_disc
        @disc = Disc.find_by(id: params[:id])
    end

    def find_bag
        Bag.find(params[:id])
    end

    def already_bagged?
        Bag.where(bag_user_id: current_user.id, bag_disc_id: params[:bag_disc_id]).exists?
    end

    def bag_params
        params.permit(:like, :bag_user_id, :bag_disc_id)
    end

    def set_flash_message!(key, kind, options = {})
        if is_flashing_format?
        set_flash_message(key, kind, options)
        end
    end
end
