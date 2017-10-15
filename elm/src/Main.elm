module Main exposing (..)

import Html exposing (..)


-- MODEL


type alias Model =
    { fileName : Maybe String
    , softWrap : Bool
    , tabLength : Int
    , encoding : String
    , lineCount : Int
    }


init : ( Model, Cmd Msg )
init =
    ( { fileName = Nothing
      , softWrap = False
      , tabLength = 4
      , encoding = "UTF-8"
      , lineCount = 0
      }
    , Cmd.none
    )



-- UPDATE


type Msg
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        NoOp ->
            ( model, Cmd.none )



-- VIEW


view : Model -> Html Msg
view { fileName, softWrap, tabLength, encoding, lineCount } =
    let
        fileNameText =
            fileName |> Maybe.withDefault "Untitled"

        softWrapText =
            if softWrap then
                "yes"
            else
                "no"
    in
        div []
            [ h2 [] [ text fileNameText ]
            , ul []
                [ itemView "Soft Wrap" softWrapText
                , itemView "Tab Length" (toString tabLength)
                , itemView "Encoding" encoding
                , itemView "Line Count" (toString lineCount)
                ]
            ]


itemView : String -> String -> Html msg
itemView label value =
    li []
        [ b [] [ text <| label ++ ": " ++ value ] ]



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.none



-- APP


main : Program Never Model Msg
main =
    Html.program
        { init = init
        , view = view
        , update = update
        , subscriptions = subscriptions
        }
