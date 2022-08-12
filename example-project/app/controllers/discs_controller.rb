class DiscsController < ApplicationController

def index
    render json: Disc.all    
end

def show
    disc = Disc.find(params[:id])
    render json: disc
end

end
