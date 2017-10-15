module Main exposing (..)

import Html exposing (Html, div, text)
import Dict


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }


type alias Model =
    { dict : Dict.Dict String (List String)
    }


type Msg
    = None


init : ( Model, Cmd Msg )
init =
    ( { dict = Dict.empty }, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        None ->
            ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div [] [ text "Hello World!" ]


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none
