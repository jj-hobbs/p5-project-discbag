class DiscsController < ApplicationController

def index
    render json: Disc.all    
end

end
