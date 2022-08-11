class BagsController < ApplicationController

def index
    render json: Bag.all
end

end
