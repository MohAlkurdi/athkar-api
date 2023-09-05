# Athkar API

## What is it?

Doa'a API that provides morning and night doa'as for Muslims.

## Usage

To use this API, you can send a GET request to the following endpoint:

[athkar-api.cyclic.app/morning](https://athkar-api.cyclic.app/morning)

The API will return a JSON object with the following properties:

```json
{
  "id": "athkar#1.25",
  "text": "اللَّهُمَّ صَلِّ وسَلِّمْ على نَبَيِّنَا محمدٍ.",
  "counter": 10
}
```

**Note**: The JSON response from the API includes a `counter` property, which represents the number of times the doa'a should be recited. For example, if the `counter` property is `10`, the doa'a should be recited 10 times. If the `counter` property is `1`, it means the doa'a is only meant to be recited once.

for information about available endpoint visit the [website](https://athkar-api.cyclic.app).

## Example

Here's an example of how to use the API with JavaScript:

```javascript
fetch("https://athkar-api.cyclic.app/morning")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
```

## Installation

1. Clone the repository:

```shell
   git clone https://github.com/MohAlkurdi/athkar-api.git
```

2. Navigate to the project directory:

```shell
cd athkar-api
```

3. Install the project dependencies:

```shell
npm i
```

4. Run dev server:

```shell
npm run dev
```

Development server should run on port 5000

## Contributing

If you want to contribute to this API, feel free to submit a pull request or open an issue.
For feature request you can contact me on [Twitter](https://twitter.com/Coder_Moh).

## Data Source

The data for this API was sourced from the [pr-Mais/noor](https://github.com/pr-Mais/noor) repository, which contains a collection of doa'a for Muslims. I'm grateful to the contributors of that repository for making this data available.
