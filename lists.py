"""A comprehensive, beginner-friendly guide to Python lists.

Run this file with: python lists.py
"""


def main():
    # 1. Creating lists
    empty_list = []
    numbers = [10, 20, 30, 40]
    fruits = ["apple", "banana", "cherry"]
    mixed_values = ["Ada", 36, True]
    same_value_list = [0] * 4

    print("1. Creating lists")
    print("empty:", empty_list)
    print("numbers:", numbers)
    print("fruits:", fruits)
    print("mixed values:", mixed_values)
    print("repeated values:", same_value_list)

    # 2. Reading items: indexes start at 0; negative indexes count from the end.
    print("\n2. Indexing and length")
    print("first fruit:", fruits[0])
    print("last fruit:", fruits[-1])
    print("number of fruits:", len(fruits))

    # 3. Slicing uses a start index (included) and stop index (excluded).
    print("\n3. Slicing")
    print("first two:", fruits[0:2])
    print("from index one:", fruits[1:])
    print("first two (shorthand):", fruits[:2])
    print("every second number:", numbers[::2])
    print("reversed copy:", numbers[::-1])

    # 4. Updating items and changing list size
    print("\n4. Updating lists")
    groceries = ["bread", "milk", "eggs"]
    groceries[1] = "oat milk"
    groceries.append("apples")
    groceries.insert(1, "coffee")
    groceries.extend(["rice", "beans"])
    print("after updates:", groceries)

    # 5. Removing items
    groceries.remove("eggs")  # Removes the first matching value; raises ValueError if absent.
    last_item = groceries.pop()  # Removes and returns the last item.
    second_item = groceries.pop(1)  # An index can be supplied to pop.
    del groceries[0]  # del can remove an item by index.
    print("after removals:", groceries)
    print("items returned by pop:", last_item, "and", second_item)
    groceries.clear()
    print("after clear:", groceries)

    # 6. Membership and searching
    print("\n5. Membership and searching")
    colors = ["red", "green", "blue", "green"]
    print("'blue' is present:", "blue" in colors)
    print("'black' is absent:", "black" not in colors)
    print("first index of green:", colors.index("green"))
    print("number of green items:", colors.count("green"))

    # 7. Iterating over values and indexes
    print("\n6. Iterating")
    for color in colors:
        print("color:", color)

    for index, color in enumerate(colors, start=1):
        print(f"{index}. {color}")

    # 8. List comprehensions create a new list from an iterable.
    print("\n7. List comprehensions")
    squares = [number**2 for number in range(1, 6)]
    even_squares = [number**2 for number in range(1, 11) if number % 2 == 0]
    labels = ["even" if number % 2 == 0 else "odd" for number in range(1, 6)]
    print("squares:", squares)
    print("even squares:", even_squares)
    print("labels:", labels)

    # 9. Sorting and reversing
    print("\n8. Sorting")
    scores = [72, 95, 81, 64]
    scores.sort()  # Sorts this list in place.
    print("ascending in place:", scores)
    scores.sort(reverse=True)
    print("descending in place:", scores)

    names = ["Zoe", "alex", "Morgan"]
    sorted_names = sorted(names, key=str.lower)  # sorted() returns a new list.
    print("original names:", names)
    print("case-insensitive sorted copy:", sorted_names)
    names.reverse()  # Reverses this list in place; it does not sort it.
    print("reversed names:", names)

    # 10. Useful built-in functions for numeric lists
    print("\n9. Numeric helpers")
    measurements = [2.5, 4.0, 3.5]
    print("minimum:", min(measurements))
    print("maximum:", max(measurements))
    print("sum:", sum(measurements))
    print("average:", sum(measurements) / len(measurements))

    # 11. Copying: assignment makes an alias, not a separate list.
    print("\n10. Copying lists")
    original = ["pen", "notebook"]
    alias = original
    alias.append("ruler")
    print("original after changing alias:", original)

    shallow_copy = original.copy()  # list(original) and original[:] also make shallow copies.
    shallow_copy.append("eraser")
    print("original after changing copy:", original)
    print("separate copy:", shallow_copy)

    # A shallow copy does not copy nested lists. Use deepcopy for independent nested data.
    from copy import deepcopy

    nested = [[1, 2], [3, 4]]
    shallow_nested_copy = nested.copy()
    deep_nested_copy = deepcopy(nested)
    shallow_nested_copy[0].append(99)
    deep_nested_copy[1].append(88)
    print("nested original after shallow-copy edit:", nested)
    print("independent deep copy:", deep_nested_copy)

    # 12. Nested lists represent rows and columns.
    print("\n11. Nested lists")
    grid = [["A1", "A2"], ["B1", "B2"]]
    print("row 2, column 1:", grid[1][0])
    for row in grid:
        print(row)

    # Create each row separately. Multiplying a nested list can accidentally
    # make every row refer to the very same inner list.
    independent_rows = [[0] * 3 for _ in range(2)]
    independent_rows[0][0] = 1
    print("independent rows:", independent_rows)

    # 13. Unpacking and combining lists
    print("\n12. Unpacking and combining")
    coordinates = [12, 7]
    x_position, y_position = coordinates
    combined = ["start"] + ["middle", "end"]
    print("x and y:", x_position, y_position)
    print("combined:", combined)

    # 14. Common mistakes and useful reminders
    print("\n13. Common reminders")
    print("An empty list is falsey:", bool([]))
    print("Use 'is' for identity, not to compare list contents.")
    print("Methods such as append(), sort(), and reverse() change a list in place.")
    print("A list comprehension creates a new list; avoid changing a list while iterating over it.")


if __name__ == "__main__":
    main()
